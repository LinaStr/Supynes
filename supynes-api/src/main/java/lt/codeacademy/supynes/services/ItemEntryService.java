package lt.codeacademy.supynes.services;

import lt.codeacademy.supynes.dto.ItemEntryDto;
import lt.codeacademy.supynes.entities.ItemEntry;
import lt.codeacademy.supynes.repositories.ItemEntryRepository;
import lt.codeacademy.supynes.services.exceptions.ItemEntryNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ItemEntryService {

    private ItemEntryRepository itemEntryRepository;
    private FileStorageService fileStorageService;

    public ItemEntryService(ItemEntryRepository itemEntryRepository,
                            FileStorageService fileStorageService)
    {
        this.itemEntryRepository = itemEntryRepository;
        this.fileStorageService = fileStorageService;
    }


    public List<ItemEntry> getAllItemEntries() {
        return itemEntryRepository.findAll();
    }

    public ItemEntry buildItemEntry(ItemEntry itemEntry) {
        return itemEntryRepository.save(itemEntry);
    }



    public ItemEntry saveItemEntry(ItemEntry itemEntry, MultipartFile file) {
        if (file != null) {
            itemEntry.setFileName(file.getOriginalFilename());
            fileStorageService.storeFile(file);
        }
        return itemEntryRepository.save(itemEntry);
    }

    public ItemEntry getItemEntryById(Long id) {
        return itemEntryRepository.findById(id)
                .orElseThrow(() -> new ItemEntryNotFoundException("Order was not found"));
    }

    public void deleteItemEntry(Long id) {
        itemEntryRepository.deleteById(id);
    }

    public Page<ItemEntry> getItemEntriesPaginated(int pageNumber, int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        return itemEntryRepository.findAll(pageable);
    }
}
