package lt.codeacademy.supynes.controller;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lt.codeacademy.supynes.dto.ItemEntryDto;
import lt.codeacademy.supynes.entities.ItemEntry;
import lt.codeacademy.supynes.entities.User;
import lt.codeacademy.supynes.enums.Handlebar;
import lt.codeacademy.supynes.enums.Paving;
import lt.codeacademy.supynes.enums.SeatMaterial;
import lt.codeacademy.supynes.services.ItemEntryService;
import org.springframework.data.domain.Page;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController()
@RequestMapping("/itemEntries")
public class ItemEntryController {

    private final ItemEntryService itemEntryService;

    public ItemEntryController(ItemEntryService itemEntryService) {
        this.itemEntryService = itemEntryService;
    }

    @ApiResponses({
            @ApiResponse(code = 500, message = "Somethings wrong")
    })

//    @GetMapping
//    public List<ItemEntry> getItemEntries() {
//        return itemEntryService.getAllItemEntries();
//    }

    @GetMapping
    public Page<ItemEntry> getItemEntriesPaginated(
            @RequestParam(name = "pageNumber", required = false, defaultValue = "0") int pageNumber,
            @RequestParam(name = "pageSize") int pageSize
    ) {
        return itemEntryService.getItemEntriesPaginated(pageNumber, pageSize);
    }


    @GetMapping("/{id}")
    public ItemEntry getItemEntryById(@PathVariable Long id) {
        return itemEntryService.getItemEntryById(id);
    }


    @GetMapping("/map")
    public List<ItemEntry> getItemEntries() {
        return itemEntryService.getAllItemEntries();
    }

    @PostMapping("/createItemEntry")
    public ItemEntry createItemEntry(
            @AuthenticationPrincipal User user,
            @RequestParam(name = "file", required = false) MultipartFile file,
            @RequestParam(name = "title") String title,
            @RequestParam(name = "seatMaterial") SeatMaterial seatMaterial,
            @RequestParam(name = "handlebar") Handlebar handlebar,
            @RequestParam(name = "paving") Paving paving,
            @RequestParam(name = "description", required = false) String description,
            @RequestParam(name = "locationLat") String locationLat,
            @RequestParam(name = "locationLng") String locationLng
    ) {
        ItemEntry itemEntry = ItemEntry.builder()
                .title(title)
                .seatMaterial(seatMaterial)
                .handlebar(handlebar)
                .paving(paving)
                .locationLat(locationLat)
                .locationLng(locationLng)
                .description(description)
                .user(user)
                .build();

        return itemEntryService.saveItemEntry(itemEntry, file);
    }

    @PostMapping("/{itemEntryId}/update")
    public ItemEntry updateItemEntry(
            @PathVariable Long itemEntryId,
            @AuthenticationPrincipal User user,
            @RequestParam(name = "file", required = false) MultipartFile file,
            @RequestParam(name = "title") String title,
            @RequestParam(name = "seatMaterial") SeatMaterial seatMaterial,
            @RequestParam(name = "handlebar") Handlebar handlebar,
            @RequestParam(name = "paving") Paving paving,
            @RequestParam(name = "description", required = false) String description,
            @RequestParam(name = "locationLat") String locationLat,
            @RequestParam(name = "locationLng") String locationLng
    ) {
        ItemEntry itemEntry = itemEntryService.getItemEntryById(itemEntryId);

        itemEntry.setTitle(title);
        itemEntry.setSeatMaterial(seatMaterial);
        itemEntry.setHandlebar(handlebar);
        itemEntry.setPaving(paving);
        itemEntry.setLocationLat(locationLat);
        itemEntry.setLocationLng(locationLng);
        itemEntry.setDescription(description);
        itemEntry.setUser(user);

        return itemEntryService.saveItemEntry(itemEntry, file);
    }



    @PostMapping("/{itemEntryId}/delete")
//    @PreAuthorize("hasRole('ADMIN')")
    public void deleteItemEntry(@PathVariable Long itemEntryId) {
        itemEntryService.deleteItemEntry(itemEntryId);
    }

    @GetMapping("/fail")
    public ItemEntry getFailure() {
        throw new RuntimeException("This is an error");
    }
}
