package lt.codeacademy.supynes.dto;

import lombok.Data;
import lt.codeacademy.supynes.entities.Role;
import lt.codeacademy.supynes.entities.User;

import java.util.Set;
import java.util.stream.Collectors;

@Data
public class UserDto {
        private String userName;
        private Set<String> roles;


        public UserDto(User user) {
            this.userName = user.getName();
            this.roles = user.getRoles().stream()
                    .map(Role::getRole)
                    .collect(Collectors.toSet());
        }
    }