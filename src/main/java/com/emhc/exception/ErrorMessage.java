package com.emhc.exception;

import java.util.ArrayList;
import java.util.List;

public class ErrorMessage {
	
	protected List<CommonErrorData> error;
	
	public ErrorMessage() {
	}
	
    /**
     * Gets the value of the error property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the error property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getError().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CommonErrorData }
     * 
     * 
     */
    public List<CommonErrorData> getError() {
        if (error == null) {
            error = new ArrayList<CommonErrorData>();
        }
        return this.error;
    }
}
