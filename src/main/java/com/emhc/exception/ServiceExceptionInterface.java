package com.emhc.exception;

public interface ServiceExceptionInterface {

	/**
	 * 
	 * @return The ErrorMessage that the exception is carried with it.
	 */
	public ErrorMessage getErrorMessage();

	/**
	 * Localize the message and resolution of the exception.
	 * @param locale The locale that message of this exception should be conerted to.
	 */
	public void localizeMessage(String locale);

}
