package lt.codeacademy.supynes.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Ratings")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rating_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_entry_id")
    private ItemEntry itemEntry;

    @Column(name = "valuation")
    private int valuation;
}
