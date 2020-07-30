package lt.codeacademy.supynes.repositories;

import lt.codeacademy.supynes.entities.ItemEntry;
import lt.codeacademy.supynes.entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemEntryRepository extends JpaRepository<ItemEntry, Long> {
}
