package lt.codeacademy.supynes.dto;

import lombok.Data;
import lt.codeacademy.supynes.entities.ItemEntry;
import lt.codeacademy.supynes.enums.Handlebar;
import lt.codeacademy.supynes.enums.Paving;
import lt.codeacademy.supynes.enums.SeatMaterial;

@Data
public class ItemEntryDto {
    private UserDto userDto;
    private String title;
    private SeatMaterial seatMaterial;
    private Handlebar handlebar;
    private Paving paving;
    private String description;
    private String locationLat;
    private String locationLng;
    private String fileName;

    public ItemEntryDto(ItemEntry itemEntry) {
        this.userDto = userDto;
        this.title = title;
        this.seatMaterial = seatMaterial;
        this.handlebar = handlebar;
        this.paving = paving;
        this.description = description;
        this.locationLat = locationLat;
        this.locationLng = locationLng;
        this.fileName = fileName;
    }
}
