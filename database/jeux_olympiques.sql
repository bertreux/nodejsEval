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

--
-- Structure de la table `athlete`
--

CREATE TABLE `athlete` (
  `id_athlete` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `sexe` varchar(1) NOT NULL
);

--
-- Déchargement des données de la table `athlete`
--

INSERT INTO `athlete` (`id_athlete`, `nom`, `prenom`, `age`, `sexe`) VALUES
(NULL, 'Doe', 'John', 25, 'H');

-- --------------------------------------------------------

--
-- Structure de la table `sport`
--

CREATE TABLE `sport` (
 `id_sport` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 `Nom` varchar(255) NOT NULL
);

--
-- Déchargement des données de la table `sport`
--

INSERT INTO `sport` (`id_sport`, `Nom`) VALUES
    (NULL, 'Athletisme');

--
-- Structure de la table `epreuve`
--

CREATE TABLE `epreuve` (
   `id_epreuve` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
   `Nom` varchar(255) NOT NULL,
   `sport_id` TINYINT UNSIGNED NOT NULL,
   `athlete_id` TINYINT UNSIGNED NOT NULL,
   FOREIGN KEY (sport_id) REFERENCES sport(id_sport),
   FOREIGN KEY (athlete_id) REFERENCES athlete(id_athlete)
);

--
-- Déchargement des données de la table `epreuve`
--

INSERT INTO `epreuve` (`id_epreuve`, `Nom`, `sport_id`, `athlete_id`) VALUES
(NULL, 'Course 500 mètres', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `medaille`
--

CREATE TABLE `medaille` (
  `id_medaille` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `couleur` varchar(255) NOT NULL
);

--
-- Déchargement des données de la table `medaille`
--

INSERT INTO `medaille` (`id_medaille`, `couleur`) VALUES
(NULL, 'Bronze'),
(NULL, 'Argent'),
(NULL, 'Or');

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `id_participation` TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  `athlete_id` TINYINT UNSIGNED NOT NULL,
  `epreuve_id` TINYINT UNSIGNED NOT NULL,
  `medaille_id` TINYINT UNSIGNED NOT NULL,
  FOREIGN KEY (athlete_id) REFERENCES athlete(id_athlete),
  FOREIGN KEY (epreuve_id) REFERENCES epreuve(id_epreuve),
  FOREIGN KEY (medaille_id) REFERENCES medaille(id_medaille)
);

--
-- Déchargement des données de la table `participation`
--

INSERT INTO `participation` (`id_participation`, `athlete_id`, `epreuve_id`, `medaille_id`) VALUES
(NULL, 1, 1, 3);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
