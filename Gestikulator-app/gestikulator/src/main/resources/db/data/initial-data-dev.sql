INSERT INTO public.user (username, email, password)
VALUES ('guido', 'guido@gmail.com', 'guido1234'),
       ('ivan', 'ivan@gmail.com', 'ivan1234');

INSERT INTO level (name)
VALUES ('Znakovi'),
       ('Osnove'),
       ('Demo 3');

INSERT INTO sub_level(name, level_id)
VALUES ('Testna pod razina', 1),
       ('Prva pod razina', 3),
       ('Druga pod razina', 3),
       ('Treća pod razina', 3),
       ('Četvrta pod razina', 3);

INSERT INTO gesture(name, uri, description)
VALUES ('Pozdrav', 'C:\put\gesta.mp4', 'gesta za pozdrav'),
       ('Molim', 'C:\put\jos_puta\gestica.mp4', 'gesta za molim'),
       ('Majmun', 'neki uri', 'gesta za majmuna'),
       ('Gluh', 'neki uri', 'gesta za gluh'),
       ('Godina', 'neki uri', 'gesta za godina'),
       ('Ime', 'neki uri', 'gesta za ime'),
       ('Ti', 'neki uri', 'gesta za ti');

INSERT INTO question(question_type, text, correct_gesture_id, wrong_gesture_id_1, wrong_gesture_id_2,
                     wrong_gesture_id_3, sub_level_id)
VALUES ('GUESS_GESTURE', 'Odaberite gestu za pozdrav:', 1, 2, 3, 2, 1),
       ('GUESS_PHRASE', 'Što predstavlja ova gesta:', 3, 1, 1, 2, 1),
       ('GUESS_GESTURE', 'Odaberite gestu za molim:', 2, 3, 1, 1, 1),
       ('GUESS_PHRASE', 'Koja je gesta prikazana:', 1, 3, 3, 3, 1),
       ('GUESS_GESTURE', 'Odaberite gestu za gluh:', 4, 5, 6, 7, 1),
       ('GUESS_GESTURE', 'Odaberite gestu za godina:', 5, 4, 6, 7, 1),
       ('GUESS_GESTURE', 'Odaberite gestu za ime:', 6, 4, 5, 7, 1),
       ('GUESS_GESTURE', 'Odaberite gestu za ti:', 7, 5, 6, 4, 1);

