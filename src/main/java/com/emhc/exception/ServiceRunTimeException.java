package com.emhc.exception;

import java.util.List;

public class ServiceRunTimeException extends RuntimeException implements ServiceExceptionInterface {

	private final transient ErrorMessage m_errorMessage;
	private transient ErrorSubcategory m_subcategory;

	/**
	 * Constructor.
	 * @param errorData error data of the exception
	 */
	public ServiceRunTimeException(CommonErrorData errorData) {
		this(errorData, null);
	}

	/**
	 * Constructor.
	 * @param errorData list of error data of the exception
	 */
	public ServiceRunTimeException(List<CommonErrorData> errorData) {
		this(errorData, null);
	}

	/**
	 * @param serviceException the service exception to be wrapped
	 * @return the wrapped exception
	 */
	public static RuntimeException wrap(ServiceException serviceException) {
		List<CommonErrorData> errors = serviceException.getErrorMessage().getError();
		if (errors.isEmpty()) {
			return new RuntimeException("ServiceException without error data: " +
				serviceException.toString(), serviceException);
		}

		ErrorSubcategory subcategory = serviceException.getSubcategory();
		return new ServiceRunTimeException(ErrorLibraryBaseErrors.getNewErrorMessage(errors),
			subcategory, serviceException.getMessage(), serviceException);
	}

	/**
	 * Constructor.
	 * @param errorData the error data of the exception
	 * @param cause the cause of the exception
	 */
	public ServiceRunTimeException(CommonErrorData errorData, Throwable cause)
	{
		this(ErrorLibraryBaseErrors.getNewErrorMessage(errorData), cause);
	}

	/**
	 * Constructor.
	 * @param errorData the list of error data of the exception
	 * @param cause the cause of the exception
	 */
	public ServiceRunTimeException(List<CommonErrorData> errorData, Throwable cause)
	{
		this(ErrorLibraryBaseErrors.getNewErrorMessage(errorData), cause);
	}

	/**
	 * Constructor.
	 * @param errorMessage the error message of the exception
	 * @param cause the cause of the exception
	 */
	public ServiceRunTimeException(ErrorMessage errorMessage, Throwable cause) {
		this(errorMessage, null, null, cause);
	}

	/**
	 * Constructor.
	 * @param errorMessage the error message of the exception
	 * @param defMessage the default error message
	 * @param cause the cause of the exception
	 */
	public ServiceRunTimeException(ErrorMessage errorMessage,
		String defMessage, Throwable cause)
	{
		this(errorMessage, null, defMessage, cause);
	}

	private ServiceRunTimeException(ErrorMessage errorMessage,
		ErrorSubcategory subcategory, String defMessage, Throwable cause)
	{
		super(ErrorLibraryBaseErrors.getDefaultMessage(errorMessage, defMessage), cause);
		m_errorMessage = errorMessage;
		m_subcategory = subcategory;
	}

	@Override
	public final ErrorMessage getErrorMessage() {
		return m_errorMessage;
	}

	/**
	 * Gets the sub-category.
	 * @return sub-category
	 */
	public final ErrorSubcategory getSubcategory() {
		return m_subcategory;
	}
 
	/**
	 * Removes the sub category.
	 */
	public final void eraseSubcategory() {
		m_subcategory = null;
	}

	@Override
	public final void localizeMessage(String locale) {}

	/**
	 * serial version UID.
	 */
	static final long serialVersionUID = 835486766282112209L;
}