package com.emhc.exception;

import java.util.List;

public class ServiceException extends Exception implements ServiceExceptionInterface {

	private final transient ErrorMessage m_errorMessage;
	private transient ErrorSubcategory m_subcategory;
	
	/**
	 * 
	 * @param s The error message.
	 */
	/*public ServiceException(java.lang.String s) {
		this(ErrorUtils.createErrorData(ErrorConstants.SVC_WSDL_FAULT_EXCEPTION, 
				ErrorConstants.ERRORDOMAIN, new Object[]{s}));

	}*/
	    
	/**
	 * 
	 * @param s The error message.
	 * @param cause The Throwable that is the cause of this exception.
	 */
	/*public ServiceException(java.lang.String s, java.lang.Throwable cause) {
		this(ErrorUtils.createErrorData(ErrorConstants.SVC_WSDL_FAULT_EXCEPTION, 
				ErrorConstants.ERRORDOMAIN,new Object[]{s}), cause);

	 }*/

	/**
	 * 
	 * @param errorData  The CommonErrorData structure to be reported.
	 */
	public ServiceException(CommonErrorData errorData) {
		this(errorData, null);
	}

	/**
	 * 
	 * @param errorData  List of CommonErrorData structures to be reported.
	 */
	public ServiceException(List<CommonErrorData> errorData) {
		this(errorData, null);
	}

	/**
	 * 
	 * @param errorData  The CommonErrorData structure to be reported.
	 * @param cause  The Throwable that is the cause of this exception.
	 */
	public ServiceException(CommonErrorData errorData, Throwable cause)
	{
		this(ErrorLibraryBaseErrors.getNewErrorMessage(errorData), cause);
	}

	/**
	 * 
	 * @param errorData  The List of CommonErrorData structures to be reported.
	 * @param cause  The Throwable that is the cause of this exception.
	 */
	public ServiceException(List<CommonErrorData> errorData, Throwable cause)
	{
		this(ErrorLibraryBaseErrors.getNewErrorMessage(errorData), cause);
	}

	/**
	 * 
	 * @param errorMessage  The ErrorMessage to be reported in the exception.
	 * @param cause  The Throwable that is the cause of this exception.
	 */
	public ServiceException(ErrorMessage errorMessage, Throwable cause)
	{
		this(errorMessage, getErrorSubCategory(errorMessage), null, cause);
	}

	/**
	 * 
	 * @param errorMessage  The ErrorMessage to be reported in the exception.
	 * @param defMessage The default message.
	 * @param cause  The Throwable that is the cause of this exception.
	 */
	public ServiceException(ErrorMessage errorMessage, String defMessage, Throwable cause)
	{
		this(errorMessage, getErrorSubCategory(errorMessage), defMessage, cause);
	}

	private ServiceException(ErrorMessage errorMessage,
		ErrorSubcategory subcategory, String defMessage, Throwable cause)
	{
		super(ErrorLibraryBaseErrors.getDefaultMessage(errorMessage, defMessage), cause);
		m_errorMessage = errorMessage;
		m_subcategory = subcategory;
	}

	/**
	 * @return The ErrorMessage structure.
	 */
	public final ErrorMessage getErrorMessage() {
		return m_errorMessage;
	}

	/**
	 * 
	 * @return The ErrorSubcategory.
	 */
	public final ErrorSubcategory getSubcategory() {
		return m_subcategory;
	}

	/**
	 * Removes the ErrorSubcategory.
	 */
	public final void eraseSubcategory() {
		m_subcategory = null;
	}

	/**
	 * Localize the message of this Exception for the given locale.
	 * 
	 * @param locale The locale that message of this exception should be conerted to.
	 */
	public final void localizeMessage(String locale) {
	}

	/**
	 * serial version UID.
	 */
	static final long serialVersionUID = 835486766282112209L;
	
	/**
	 * Need to come up with alternate logic in the long run 
	 */
	private static ErrorSubcategory getErrorSubCategory(ErrorMessage errorMessage){
		List<CommonErrorData> errorList = errorMessage.getError();
		String subDomain = null;
		if(errorList != null && !errorList.isEmpty() && errorList.get(0) != null){
			subDomain = errorList.get(0).getSubdomain();
		}
		if(subDomain == null)
			return null;
		return ErrorSubcategory.NAMETOERRORSUBCATEGORY.get(subDomain);
	}
	
}
