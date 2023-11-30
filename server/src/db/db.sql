-- Enterprise Resource Planning System

-- Create a Database named erp
CREATE DATABASE erp;

-- Use erp database
USE erp;

-- Tables
-- users
-- events 
-- registrations
-- attendance
-- projects
-- project_members
-- assignments
-- user_assignments
-- user_achievements
-- user_ticket_raise


-- Create a table named users
CREATE TABLE IF NOT EXISTS users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Create a table named refresh_tokens
CREATE TABLE IF NOT EXISTS refresh_tokens (
    token VARCHAR(255) NOT NULL,
    user_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create a table named events 
CREATE TABLE IF NOT EXISTS events (
    event_id INT(11) NOT NULL AUTO_INCREMENT,
    event_name VARCHAR(255) NOT NULL,
    event_date DATE NOT NULL CHECK (event_date >= CURDATE()), 
    event_time TIME NOT NULL CHECK (event_time >= '00:00:00' AND event_time <= '23:59:59'),  
    event_venue VARCHAR(255) NOT NULL,
    event_description VARCHAR(255) NOT NULL,
    event_org VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (event_id)
);


-- Create a table named registrations
CREATE TABLE IF NOT EXISTS registrations (
    registration_id INT(11) NOT NULL AUTO_INCREMENT,
    event_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (registration_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create a table named attendance
CREATE TABLE IF NOT EXISTS attendance (
    attendance_id INT(11) NOT NULL AUTO_INCREMENT,
    event_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (attendance_id),
    FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
);

-- Create a table named projects
CREATE TABLE IF NOT EXISTS projects (
    project_id INT(11) NOT NULL AUTO_INCREMENT,
    project_name VARCHAR(255) NOT NULL,
    project_description VARCHAR(255) NOT NULL,
    project_deadline DATE NOT NULL,
    project_status VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (project_id)
);

-- Create a table named project_members
CREATE TABLE IF NOT EXISTS project_members (
    project_member_id INT(11) NOT NULL AUTO_INCREMENT,
    project_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (project_member_id),
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
);

-- Create a table named assignments
CREATE TABLE IF NOT EXISTS assignments (
    assignment_id INT(11) NOT NULL AUTO_INCREMENT,
    assignment_name VARCHAR(255) NOT NULL,
    assignment_description VARCHAR(255) NOT NULL,
    assignment_deadline DATE NOT NULL,
    assignment_status VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (assignment_id)
);

-- Create a table named user_assignments
CREATE TABLE IF NOT EXISTS user_assignments (
    user_assignment_id INT(11) NOT NULL AUTO_INCREMENT,
    assignment_id INT(11) NOT NULL,
    user_id INT(11) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_assignment_id),
    FOREIGN KEY (assignment_id) REFERENCES assignments(assignment_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
);

-- Create a table named user_achievements
CREATE TABLE IF NOT EXISTS user_achievements (
    user_achievement_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    achievement_name VARCHAR(255) NOT NULL,
    achievement_description VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_achievement_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create a table named user_ticket_raise
CREATE TABLE IF NOT EXISTS user_ticket_raise (
    user_ticket_raise_id INT(11) NOT NULL AUTO_INCREMENT,
    user_id INT(11) NOT NULL,
    ticket_name VARCHAR(255) NOT NULL,
    ticket_description VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_ticket_raise_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);