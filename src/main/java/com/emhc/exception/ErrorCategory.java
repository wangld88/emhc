package com.emhc.exception;

public enum ErrorCategory {
	
	SYSTEM("System"), APPLICATION("Application"), REQUEST("Request");
	
    private final String value;

    ErrorCategory(String v) {
        value = v;
    }

    public String value() {
        return value;
    }

    public static ErrorCategory fromValue(String v) {
        for (ErrorCategory c: ErrorCategory.values()) {
            if (c.value.equals(v)) {
                return c;
            }
        }
        throw new IllegalArgumentException(v);
    }

}
