package lt.codeacademy.supynes.entities;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.Tolerate;
import lt.codeacademy.supynes.enums.Handlebar;
import lt.codeacademy.supynes.enums.Paving;
import lt.codeacademy.supynes.enums.SeatMaterial;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
@Builder
@Entity
@Table(name = "ItemEntries")
//@ApiModel(value = "Product", description = "A product in this eshop")
public class ItemEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_entry_id")
    @ApiModelProperty(hidden = true)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "title")
    @NotEmpty
    private String title;


    @Column(name = "seat_material")
    @Enumerated(EnumType.STRING)
    private SeatMaterial seatMaterial;


    @Column(name = "handlebar")
    @Enumerated(EnumType.STRING)
    private Handlebar handlebar;

    @Column(name = "paving")
    @Enumerated(EnumType.STRING)
    private Paving paving;

    @Lob
    @Column(name = "description")
    private String description;


    @Column(name = "location_lat")
    private String locationLat;

    @Column(name = "location_lng")//longitude
    private String locationLng;

    @Column(name = "file_name")
    private String fileName;

    @Tolerate
    public ItemEntry(){}


}
