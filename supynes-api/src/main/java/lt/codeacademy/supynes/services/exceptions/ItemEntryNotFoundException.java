package lt.codeacademy.supynes.services.exceptions;

public class ItemEntryNotFoundException extends RuntimeException {
    public ItemEntryNotFoundException(String message) {
        super(message);
    }
}
