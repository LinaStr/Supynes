package lt.codeacademy.supynes.repositories;

import lt.codeacademy.supynes.entities.Comment;
import lt.codeacademy.supynes.entities.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
