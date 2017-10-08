package com.emhc.controller.student;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.emhc.model.Answer;
import com.emhc.service.AnswerService;
import com.emhc.service.UserService;

@Controller
@RequestMapping("/student")
public class AssessmentController {
	

	@Autowired
	private AnswerService answerService;

	@RequestMapping(value={"/assessment"}, method = RequestMethod.GET)
	public ModelAndView assessment(){
		System.out.println("-------run to here assessment of student--------");
		ModelAndView modelAndView = new ModelAndView();
		Answer answer = new Answer();
		
		modelAndView.addObject("answer", answer);

		modelAndView.setViewName("student/assessment");
		System.out.println("-------run out to here assessment of student--------");
		return modelAndView;
	}
	
	
	@RequestMapping(value = "/assessment", method = RequestMethod.POST)
	public ModelAndView createNewAssessment(@Valid Answer answer, BindingResult bindingResult) {
		System.out.println("------run to createNewAssessment-----");

		ModelAndView modelAndView = new ModelAndView();

		if (bindingResult.hasErrors()) {
			System.out.println("------run to assessment has error-----");

			modelAndView.setViewName("/student/assessment");
		} else {
			
			try{
				
				answerService.saveAnswer(answer);
				System.out.println("------run to assessment saved answer-----");
				modelAndView.addObject("successMessage", "Assessment has been submitted successfully");
				modelAndView.setViewName("/student/assessment");
			}
			catch(Exception e){
				e.printStackTrace();
				
			}
		}
		return modelAndView;
	}

}
