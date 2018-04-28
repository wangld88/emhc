package com.emhc.controller.admin;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.emhc.controller.base.BaseController;
import com.emhc.error.Message;
import com.emhc.model.Answer;
import com.emhc.model.Organization;
import com.emhc.model.Program;
import com.emhc.model.Question;
import com.emhc.model.Registration;
import com.emhc.model.User;
import com.emhc.security.LoginUser;
import com.emhc.service.OrganizationService;
import com.emhc.service.ProgramService;
import com.emhc.service.RegistrationService;


@Controller
@RequestMapping({"/admin"})
public class AdminReport extends BaseController {

	private final Logger logger = LoggerFactory.getLogger(AdminReport.class);

	@Autowired
	RegistrationService registService;

	@Autowired
	ProgramService programService;

	@Autowired
	OrganizationService organizationService;

	@RequestMapping(value="/report", method=RequestMethod.GET)
	public String dspReport(Model model,
							HttpSession httpSession) {

		String rtn = "/admin/report";
		User user = getPrincipal();

		List<Organization> orgs = organizationService.findAll();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			model.addAttribute("orgs", orgs);
		}
		return rtn;
	}

	@RequestMapping(value="/report/org/{orgid}", method=RequestMethod.GET)
	public String dspOrganization(@PathVariable("orgid") Long orgid, @ModelAttribute("errMessage") Message errMessage, Model model) {
		String rtn = "/admin/report";
		User user = getPrincipal();

		List<Program> programs = new ArrayList<>();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			programs = programService.getByOrganizationId(orgid);
		}
		if(errMessage != null) {
			model.addAttribute("message", errMessage);
		}
		List<Organization> orgs = organizationService.findAll();
		model.addAttribute("orgs", orgs);
		model.addAttribute("programs", programs);
		model.addAttribute("programids", "");
		model.addAttribute("orgid", orgid);

		return rtn;
	}

	@RequestMapping(value="/report", method=RequestMethod.POST)
	public String getReport(@RequestParam("organizationid") final Long orgid,
							@RequestParam("programid") final String programid,
							Model model,
							HttpSession httpSession) {

		String rtn = "/admin/report";

		User user = getPrincipal();

		logger.info("getReport is called, programid: {}", programid);

		List<Organization> orgs = organizationService.findAll();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			List<Program> programs = programService.getByOrganizationId(orgid);
			model.addAttribute("orgs", orgs);
			model.addAttribute("orgid", orgid);
			model.addAttribute("programids", programid);
			model.addAttribute("programs", programs);
			logger.info("programids: " + programid);
			//int[] arr = Arrays.stream(programid.substring(1, programid.length()-1).split(","))
				    //.map(String::trim).mapToInt(Integer::parseInt).toArray();
			String[] arr = programid.split(",");
			List<Registration> regists = new ArrayList<>();

			if(programid != null && !programid.equals(0)) {
				//regists = registService.getByProgramid(Integer.parseInt(programid));
				List<Program> selectProgs = new ArrayList<>();
				for(String i : arr) {
					System.out.println("program ID: "+i);
					selectProgs.add(programService.getById(Integer.parseInt(i)));
				}
				System.out.println("selectProgs: "+selectProgs.size());
				regists = registService.getByPrograms(selectProgs);
			} else {
				regists = registService.getByOrganizationid(orgid);
			}

			httpSession.setAttribute("regists", regists);

			model.addAttribute("regists", regists);
		}

		return rtn;
	}

	@RequestMapping(value="/report/download", method=RequestMethod.GET)
	public void download(HttpServletRequest request,
			HttpServletResponse response,
			HttpSession httpSession)
		throws IOException, InvalidFormatException {

		String rtn = "/admin/report";

		Workbook workbook = new XSSFWorkbook();

		CreationHelper createHelper = workbook.getCreationHelper();

		Sheet sheet = workbook.createSheet("Assessment");

		// Create a Font for styling header cells
        Font headerFont = workbook.createFont();
        headerFont.setBold(true);
        headerFont.setFontHeightInPoints((short) 14);
        headerFont.setColor(IndexedColors.RED.getIndex());

        // Create a CellStyle with the font
        CellStyle headerCellStyle = workbook.createCellStyle();
        headerCellStyle.setFont(headerFont);

        // Create a Row
        Row headerRow = sheet.createRow(0);

        String[] columns = {"Reviewed","Student Name","Session","Schedule","Ast", "Cla", "Pan", "All", "Epi", "Hea", "BP", "Fnt" ,"Sei", "Lun", "Tmp", "Tas", "Prg", "Oth"};
        for(int i = 0; i < columns.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(columns[i]);
            cell.setCellStyle(headerCellStyle);
        }

        CellStyle dateCellStyle = workbook.createCellStyle();
        dateCellStyle.setDataFormat(createHelper.createDataFormat().getFormat("dd-MM-yyyy"));

        // Create Other rows and cells with employees data
        int rowNum = 1;
        List<Registration> regists = (List<Registration>) httpSession.getAttribute("regists");

        for(Registration regist: regists) {
        	Row row = sheet.createRow(rowNum++);
        	User user = regist.getUser();
        	List<Answer> answers = user.getAnswers();
        	Answer answer = answers.get(0);

        	row.createCell(0).setCellValue(regist.getReviewed());
        	row.createCell(1).setCellValue(user.getFirstname() + " " + user.getLastname());
        	row.createCell(2).setCellValue(regist.getSchedule().getSession().getSessiondate());
        	row.createCell(3).setCellValue(regist.getSchedule().getScheduletime());
        	row.createCell(4).setCellValue(answer.getAnswer1()==null?"N":answer.getAnswer1());
        	row.createCell(5).setCellValue(answer.getAnswer2()==null?"N":answer.getAnswer2());
        	row.createCell(6).setCellValue(answer.getAnswer3()==null?"N":answer.getAnswer3());
        	row.createCell(7).setCellValue(answer.getAnswer4()==null?"N":answer.getAnswer4());
        	row.createCell(8).setCellValue(answer.getAnswer5()==null?"N":answer.getAnswer5());
        	row.createCell(9).setCellValue(answer.getAnswer6()==null?"N":answer.getAnswer6());
        	row.createCell(10).setCellValue(answer.getAnswer7()==null?"N":answer.getAnswer7());
        	row.createCell(11).setCellValue(answer.getAnswer8()==null?"N":answer.getAnswer8());
        	row.createCell(12).setCellValue(answer.getAnswer9()==null?"N":answer.getAnswer9());
        	row.createCell(13).setCellValue(answer.getAnswer10()==null?"N":answer.getAnswer10());
        	row.createCell(14).setCellValue(answer.getAnswer11()==null?"N":answer.getAnswer11());
        	row.createCell(15).setCellValue(answer.getAnswer12()==null?"N":answer.getAnswer12());
        	row.createCell(16).setCellValue(answer.getAnswer13()==null?"N":answer.getAnswer13());
        	row.createCell(14).setCellValue(answer.getAnswer14()==null?"N":answer.getAnswer14());
        }

		// Resize all columns to fit the content size
        for(int i = 0; i < columns.length; i++) {
            sheet.autoSizeColumn(i);
        }

        // Write the output to a file
        FileOutputStream fileOut = new FileOutputStream("assessment_result.xlsx");
        workbook.write(fileOut);
        fileOut.close();

        // Closing the workbook
        workbook.close();

        response.setHeader("Content-Disposition", "attachment; filename=\"assessment_result.xlsx\"");
        response.setContentType("application/octet-stream");
        FileInputStream inputStream = new FileInputStream(new File("assessment_result.xlsx"));
        OutputStream outputStream = response.getOutputStream();
        byte[] buffer = new byte[1024];
        int bytesRead = -1;
        while ((bytesRead = inputStream.read(buffer)) != -1) {
        	outputStream.write(buffer, 0, bytesRead);
        }

        outputStream.flush();
        inputStream.close();
        //return rtn;
	}


	@RequestMapping(value="/review/{registid}", method=RequestMethod.GET)
	public String dspReview(@PathVariable("registid") int registid,
			Model model,
			HttpSession httpSession) {

		String rtn = "/admin/review";

		User user = getPrincipal();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			Registration regist = registService.findById(registid);

			List<Question> quests = questionService.getAll();

			model.addAttribute("regist", regist);
			model.addAttribute("quests", quests);
		}
		return rtn;
	}


	@RequestMapping(value="/review/", method=RequestMethod.POST)
	public void doReview(@RequestParam Map<String,String> requestParams,
			Model model,
			HttpSession httpSession) {

		String rtn = "/admin/review";

		User user = getPrincipal();

		if(user == null) {
			rtn = "/admin/login";
		} else {
			String registrationid = requestParams.get("registrationid");
			if(registrationid != null && !registrationid.isEmpty()) {

				Registration regist = registService.findById(Integer.parseInt(registrationid));

				regist.setReviewed(Byte.parseByte("1"));

				registService.saveRegistration(regist);
			}
		}

	}


	private User getPrincipal(){
    	User user = null;
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof LoginUser) {
            user = ((LoginUser)principal).getUser();
        } else {
            user = userService.getByUsername("");
        }
        return user;
    }

}
