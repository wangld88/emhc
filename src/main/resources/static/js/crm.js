function submitCRMForm(form, actionname, methodname) {
	form.action = "/" + actionname;
	e = document.getElementsByName("submitbtn");
	e.onclick = "";
//	alert(document.getElementsByName("asmtForm[0].seqNo").value);
	form.method.value = methodname;
	form.submit();
}
function submitCRMFormWithQuestionID(form, actionname, methodname, question_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.question_id.value = question_id;
	form.submit();
}

function submitCRMFormWithAssessmentID(form, actionname, methodname, assessment_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.assessment_id.value = assessment_id;
	form.submit();
}
function submitCRMFormWithUserID(form, actionname, methodname, user_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.user_id.value = user_id;
	form.submit();
}
function submitCRMFormWithUserIDName(form, actionname, methodname, user_id, fullname) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.user_id.value = user_id;
	form.fullname.value = fullname;
	form.submit();
}
function submitCRMFormWithOrganizationID(form, actionname, methodname, organization_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.organization_id.value = organization_id;
	form.submit();
}
function submitCRMFormWithLocationID(form, actionname, methodname, location_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.location_id.value = location_id;
	form.submit();
}
function submitCRMFormWithProgramID(form, actionname, methodname, program_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.program_id.value = program_id;
	form.submit();
}
function submitCRMFormWithAsmtformID(form, actionname, methodname, asmtform_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.asmtform_id.value = asmtform_id;
	form.submit();
}
function submitCRMFormWithSessionID(form, actionname, methodname, session_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.session_id.value = session_id;
	form.submit();
}
function submitCRMFormWithScheduleID(form, actionname, methodname, schedule_id) {
//alert("form: "+form);
	form.action = "/" + actionname;
	form.method.value = methodname;
	form.schedule_id.value = schedule_id;
	form.submit();
}
