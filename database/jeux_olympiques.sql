-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 05 mars 2024 à 16:08
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jeux_olympiques`
--

-- --------------------------------------------------------

DROP DATABASE IF EXISTS jeux_olympiques;
CREATE DATABASE jeux_olympiques;

USE jeux_olympiques;

CREATE TABLE `pays` (
  `id_pays` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL
);

CREATE TABLE `athlete` (
  `id_athlete` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `sexe` varchar(1) NOT NULL,
  `pays_id` TINYINT UNSIGNED NOT NULL,
  `Image` varchar(255) NOT NULL,
  FOREIGN KEY (pays_id) REFERENCES pays(id_pays)
);

CREATE TABLE `sport` (
 `id_sport` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 `Nom` varchar(255) NOT NULL,
 `Image` varchar(255) NOT NULL,
 `latitude` float(25) NOT NULL,
 `longitude` float(25) NOT NULL
);

CREATE TABLE `epreuve` (
   `id_epreuve` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `Nom` varchar(255) NOT NULL,
   `sport_id` TINYINT UNSIGNED NOT NULL,
   `Image` varchar(255) NOT NULL,
   FOREIGN KEY (sport_id) REFERENCES sport(id_sport)
);

CREATE TABLE `medaille` (
  `id_medaille` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `couleur` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL
);

CREATE TABLE `participation` (
  `id_participation` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `athlete_id` TINYINT UNSIGNED NOT NULL,
  `epreuve_id` TINYINT UNSIGNED NOT NULL,
  `medaille_id` TINYINT UNSIGNED,
  FOREIGN KEY (athlete_id) REFERENCES athlete(id_athlete),
  FOREIGN KEY (epreuve_id) REFERENCES epreuve(id_epreuve),
  FOREIGN KEY (medaille_id) REFERENCES medaille(id_medaille)
);

CREATE TABLE `user` (
 `id_user` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 `email` varchar(255) UNIQUE NOT NULL,
 `pwd` varchar(255) NOT NULL
);

INSERT INTO `pays` (`id_pays`, `Nom`) VALUES
(NULL, 'France'),
(NULL, 'Italie');

INSERT INTO `athlete` (`id_athlete`, `nom`, `prenom`, `age`, `sexe`, `pays_id`, `Image`) VALUES
(NULL, 'Doe', 'John', 25, 'H', 1, 'https://img.freepik.com/vecteurs-premium/icone-avatar-masculin-personne-inconnue-anonyme-icone-profil-avatar-par-defaut-utilisateur-medias-sociaux-homme-affaires-silhouette-profil-homme-isole-fond-blanc-illustration-vectorielle_735449-120.jpg'),
(NULL, 'Alice', 'Emma', 18, 'F', 1, 'https://th.bing.com/th/id/OIP.peNkLDunoTVEhJ1_xw5vGwHaF7?rs=1&pid=ImgDetMain');

INSERT INTO `medaille` (`id_medaille`, `couleur`, `Image`) VALUES
(NULL, 'Bronze', 'https://th.bing.com/th/id/OIP.OL3SuTfHahnKEHCL6HRX8gHaHa?rs=1&pid=ImgDetMain'),
(NULL, 'Argent', 'https://cdn.pixabay.com/photo/2016/08/26/15/59/medal-1622529_1280.png'),
(NULL, 'Or', 'https://img2.gratispng.com/20180323/gce/kisspng-gold-medal-olympic-medal-award-golden-cup-5ab5a64946f4c8.1474882115218540252906.jpg'),
(NULL, 'Pas de médaille', ' ');

INSERT INTO `sport` (`id_sport`, `Nom`, `Image`, `latitude`, `longitude`) VALUES
(NULL, 'Athletisme', 'https://th.bing.com/th/id/OIP.VD-DKmK_wVYmGEbiJxV4SAHaE7?rs=1&pid=ImgDetMain', 48.8698, 2.3070),
(NULL, 'Football', 'https://resize-europe1.lanmedia.fr/r/620,310,FFFFFF,center-middle/img/var/europe1/storage/images/europe1/dossiers/football/9879360-8-fre-FR/Football.jpg', 48.9246, 2.3603);

INSERT INTO `epreuve` (`id_epreuve`, `Nom`, `sport_id`, `Image`) VALUES
(NULL, 'Course 500 mètres', 1, 'https://th.bing.com/th/id/R.3f659c2f90cddd619e1627e8af2d4a12?rik=RDELTHOl%2bF0k9Q&pid=ImgRaw&r=0'),
(NULL, 'Course 100 mètres haie', 1, 'https://th.bing.com/th/id/OIP.VAFlgD-iLAqjP-E1T5y9FwHaEK?rs=1&pid=ImgDetMain'),
(NULL, 'relais 4x400m', 1, 'https://th.bing.com/th/id/OIP.ck7ci_cu_pu0EYpO0QI3zAHaEK?rs=1&pid=ImgDetMain'),
(NULL, 'tournoi de football', 2, 'https://www.soccerbible.com/media/117951/balls-5-min.jpg');

INSERT INTO `participation` (`id_participation`, `athlete_id`, `epreuve_id`, `medaille_id`) VALUES
(NULL, 1, 1, 1),
(NULL, 1, 2, 4),
(NULL, 1, 3, 4),
(NULL, 1, 4, 3),
(NULL, 2, 1, 2),
(NULL, 2, 2, 2),
(NULL, 2, 3, 3),
(NULL, 2, 4, 1);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
