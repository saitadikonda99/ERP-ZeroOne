
-- user table
INSERT INTO users (username, email, password, role, refresh_token) VALUES
('sai', 'saitadikonda.cse@gmail.com', 'sai@1234', 'Admin', 'null')

INSERT INTO users (username, email, password, role, refresh_token) VALUES
('deepak', 'deepak@gmail.com', 'deepak', 'Student', 'null')

INSERT INTO users (username, email, password, role, refresh_token) VALUES
('pavan', 'pavan@gmail.com', 'pavan', 'Organizer', 'null')


-- user academic details
INSERT INTO user_academic_details (uni_id, user_id, FullName, Division, academic_year, academic_sem, branch, profile_link, github_link, gender, date_of_birth, phnumber) VALUES
(2200030805, 5, 'Tadikonda Sai Manikanta', 'trailbrazers', 2, 'even', 'CSE', 'https://example.com/profile1', 'github.com/saitadikonda99', 'male', '2003-10-13', '9703177577')

-- events

INSERT INTO events (event_name, event_date, academic_year_name, academic_sem, event_time, event_venue, event_description, event_org)
VALUES
('Docker', '2023-12-10', '2023-2024', 'even', '18:00:00', 'Venue 1', 'Devops', 'ZeroOne'),
('K8s', '2023-12-15', '2023-2024', 'even', '19:30:00', 'Venue 2', 'Devops', 'CIVO'),
('OpenSource', '2023-12-20', '2023-2024', 'even', '15:45:00', 'Venue 3', 'OpenSource 3', 'Apple'),
('Jenkins', '2023-12-25', '2023-2024', 'even', '16:00:00', 'Venue 4', 'Devops', 'Google'),
('Kubernetes', '2023-12-30', '2023-2024', 'even', '17:00:00', 'Venue 5', 'Devops', 'Microsoft'),
('Docker', '2023-12-10', '2023-2024', 'even', '18:00:00', 'Venue 1', 'Devops', 'ZeroOne'),
('K8s', '2023-12-15', '2023-2024', 'even', '19:30:00', 'Venue 2', 'Devops', 'CIVO'),
('OpenSource', '2023-12-20', '2023-2024', 'even', '15:45:00', 'Venue 3', 'OpenSource 3', 'Apple'),
('Jenkins', '2023-12-25', '2023-2024', 'even', '16:00:00', 'Venue 4', 'Devops', 'Google'),
('Kubernetes', '2023-12-30', '2023-2024', 'even', '17:00:00', 'Venue 5', 'Devops', 'Microsoft'),
('Docker', '2023-12-10', '2023-2024', 'even', '18:00:00', 'Venue 1', 'Devops', 'ZeroOne'),
('K8s', '2023-12-15', '2023-2024', 'even', '19:30:00', 'Venue 2', 'Devops', 'CIVO'),
('OpenSource', '2023-12-20', '2023-2024', 'even', '15:45:00', 'Venue 3', 'OpenSource 3', 'Apple'),
('Jenkins', '2023-12-25', '2023-2024', 'even', '16:00:00', 'Venue 4', 'Devops', 'Google'),
('Kubernetes', '2023-12-30', '2023-2024', 'even', '17:00:00', 'Venue 5', 'Devops', 'Microsoft'),


--same poster for all events for now
UPDATE events SET poster_link = 'https://events.linuxfoundation.org/wp-content/uploads/amazon-web-services-spn.svg';
UPDATE events SET poster_link = 'https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/212/720/thumb/Event_Background.png?1692811699'
Where event_id > 5;



-- CREATE TABLE IF NOT EXISTS attendance (
--     attendance_id INT(11) NOT NULL AUTO_INCREMENT,
--     academic_year_name VARCHAR(9) NOT NULL, 
--     academic_sem VARCHAR(255) NOT NULL CHECK (academic_sem = 'odd' OR academic_sem = 'even'),
--     event_id INT(11) NOT NULL,
--     user_id INT(11) NOT NULL,
--     status ENUM('present', 'absent') NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     PRIMARY KEY (attendance_id),
--     FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE,
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
-- );

INSERT INTO attendance(academic_year_name, academic_sem, event_id, user_id, status,  ) values (
    '2023-24','even', 5, 5, 'present'
)

INSERT INTO projects (academic_year_name, academic_sem, project_name, project_description, project_deadline, project_status)
VALUES
    ('2023', 'even', 'Continuous Integration with Jenkins', 'Implement CI using Jenkins for automated testing', '2023-05-15', 'In Progress'),
    ('2023', 'even', 'Infrastructure as Code with Terraform', 'Automate infrastructure deployment with Terraform', '2023-08-20', 'Planning'),
    ('2023', 'even', 'Container Orchestration with Kubernetes', 'Implement container orchestration using Kubernetes', '2023-12-10', 'Not Started');



alter table user_projects 
add column enroll_status VARCHAR(255) NOT NULL DEFAULT 'pending';