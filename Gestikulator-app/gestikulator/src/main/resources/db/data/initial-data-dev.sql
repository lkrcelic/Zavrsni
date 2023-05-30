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
VALUES ('Gluh', 'Gluh_1.MP4', 'gesta za gluh'),
       ('Godina', 'Godina_1.MP4', 'gesta za godinu'),
       ('Ime', 'Ime_1.MP4', 'gesta za ime'),
       ('Prezime', 'Prezime_1.MP4', 'gesta za prezime');

INSERT INTO question(question_type, text, correct_gesture_id, wrong_gesture_id_1, wrong_gesture_id_2,
                     wrong_gesture_id_3, sub_level_id)
VALUES ('GUESS_GESTURE', 'Koja je gesta prikazana', 1, 2, 3, 4, 1),
       ('GUESS_GESTURE', 'Koja je gesta prikazana', 2, 1, 3, 4, 1),
       ('GUESS_GESTURE', 'Koja je gesta prikazana', 3, 1, 2, 4, 1),
       ('GUESS_GESTURE', 'Koja je gesta prikazana', 4, 1, 2, 3, 1),
       ('GUESS_PHRASE', 'Odaberite gestu za gluh', 1, 2, 3, 4, 1),
       ('GUESS_PHRASE', 'Odaberite gestu za godina', 2, 1, 3, 4, 1),
       ('GUESS_PHRASE', 'Odaberite gestu za ime', 3, 1, 2, 4, 1),
       ('GUESS_PHRASE', 'Odaberite gestu za prezime', 4, 1, 2, 3, 1);
