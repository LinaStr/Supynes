INSERT INTO Users(username, password, name)
    VALUES('user', '{bcrypt}$2y$12$A7x.2lPxE6YdV8ed6OYbDucRiod32wqMF9JNerE.wq4glQWaIjRnO', 'John');
INSERT INTO Users(username, password, name)
    VALUES('admin', '{bcrypt}$2y$12$A7x.2lPxE6YdV8ed6OYbDucRiod32wqMF9JNerE.wq4glQWaIjRnO', 'Jack');

INSERT INTO Roles(role_id, role) VALUES(1, 'CUSTOMER');
INSERT INTO Roles(role_id, role) VALUES(2, 'ADMIN');

INSERT INTO Users_Roles(user_id, role_id) VALUES(1, 1);
INSERT INTO Users_Roles(user_id, role_id) VALUES(2, 2);

INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id, file_name) VALUES('Užupio supynės', 'WOOD', 'CHAIN', 'SAND', 'Truputį šlapia, bet vasaros laiku labai patiko!', '54.680489', '25.292520', 1, 'uzupis.jpg');
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id, file_name) VALUES('Vaikų žaidimo aikštelė', 'WOOD', 'CHAIN', 'SAND', 'Vaikam patiko, bet man tai nelabai, galva netilpo gulėjimui', '54.711142', '25.237525', 2, 'vaiku.jpg');
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id, file_name) VALUES('Olandų kepurė', 'WOOD', 'CHAIN', 'SAND', 'Pati nuostabiausia vieta pasisupti! Likime vaikais visada, supkimės gyvenimu', '55.800110', '21.067295', 2, 'olandu.jpg');
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id, file_name) VALUES('Regoninis parkas', 'WOOD', 'CHAIN', 'SAND', 'Nepatiko. Draugai nepriėmė kartu pasisupti.... Kas daro supynes fiksuotam kiekiui žmonių???!!? 0/10 NEREKOMENDUOJU', '55.598573', '24.115304', 1, 'algis.jpg');
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id, file_name) VALUES('Saulėtekio al. Code Academy', 'WOOD', 'CHAIN', 'SAND', 'React. Lengviausias būdas svyruoti', '54.723507', '25.337892', 1, 'react.jpg');
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id, file_name) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 2, 'rick.jpg');
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 1);
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 2);
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 1);
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 2);
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 1);
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 2);
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng, user_id) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00', 2);
INSERT INTO Item_Entries(title, seat_material, handlebar, paving, description, location_lat, location_lng) VALUES('Supynės', 'WOOD', 'CHAIN', 'SAND', 'labai smagios supynes', '54.00', '24.00');