CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);

CREATE INDEX idx_event_name ON events(event_name);
CREATE INDEX idx_event_date ON events(event_date);

CREATE INDEX idx_event_id_registrations ON registrations(event_id);
CREATE INDEX idx_user_id_registrations ON registrations(user_id);

CREATE INDEX idx_event_id_attendance ON attendance(event_id);
CREATE INDEX idx_user_id_attendance ON attendance(user_id);

CREATE INDEX idx_project_name ON projects(project_name);

CREATE INDEX idx_assignment_name ON assignments(assignment_name);
CREATE INDEX idx_assignment_status ON assignments(assignment_status);

CREATE INDEX idx_assignment_id_user_assignments ON user_assignments(assignment_id);
CREATE INDEX idx_user_id_user_assignments ON user_assignments(user_id);

CREATE INDEX idx_user_id_achievements ON user_achievements(user_id);

CREATE INDEX idx_user_id_ticket_raise ON user_ticket_raise(user_id);