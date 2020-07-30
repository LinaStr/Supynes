package lt.codeacademy.supynes.repositories;

import lt.codeacademy.supynes.entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
}
