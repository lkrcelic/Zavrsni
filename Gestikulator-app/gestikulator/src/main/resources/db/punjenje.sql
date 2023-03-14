INSERT INTO users (username, email, password, day_streaks) VALUES ('tinolce', 't.k.@gm.com', 'xxx', 3);
INSERT INTO users (username, email, password, day_streaks) VALUES ('pikiens', 'n.t.@gm.com', 'yyy', 8);
INSERT INTO levels (name) VALUES ('first level');
INSERT INTO sub_levels (name, level_id) VALUES ('first sub-level', 1);
INSERT INTO gestures (text, uri, description) VALUES ('first gesture', 'c:\bla', 'this is a description');
INSERT INTO gestures (text, uri, description) VALUES ('another gesture', 'c:\program', '#description');
INSERT INTO gestures (text, uri, description) VALUES ('one more gesture', 'D:\path\to\gesture', '.desc');
INSERT INTO questions (question_type, text, correct_gesture_id, wrong_gesture_id_1, wrong_gesture_id_2, wrong_gesture_id_3, sub_level_id)
VALUES ('guess gesture', 'Koja gesta prikazuje "Bok"?', 1, 2, 3, 2, 1),
('guess phrase', 'Što predstavlja sljedeća gesta?', 3, 1, 1, 2, 1),
('guess gesture', 'Koja gesta prikazuje "Molim"?', 2, 3, 1, 1, 1),
('guess phrase', 'Što predstavlja navedena gesta?', 1, 3, 3, 3, 1);
