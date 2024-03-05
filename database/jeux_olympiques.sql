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
  `id_athlete` int(3) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `sexe` binary(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `athlete`
--

INSERT INTO `athlete` (`id_athlete`, `nom`, `prenom`, `age`, `sexe`) VALUES
(1, 'Doe', 'John', 25, 0x01);

-- --------------------------------------------------------

--
-- Structure de la table `epreuve`
--

CREATE TABLE `epreuve` (
  `id_epreuve` int(3) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `sport_id` int(3) NOT NULL,
  `athlete_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `epreuve`
--

INSERT INTO `epreuve` (`id_epreuve`, `Nom`, `sport_id`, `athlete_id`) VALUES
(1, 'Course 500 mètres', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `medaille`
--

CREATE TABLE `medaille` (
  `id_medaille` int(3) NOT NULL,
  `couleur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `medaille`
--

INSERT INTO `medaille` (`id_medaille`, `couleur`) VALUES
(1, 'Bronze'),
(2, 'Argent'),
(3, 'Or');

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `id_participation` int(3) NOT NULL,
  `athlete_id` int(3) NOT NULL,
  `epreuve_id` int(3) NOT NULL,
  `medaille_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `participation`
--

INSERT INTO `participation` (`id_participation`, `athlete_id`, `epreuve_id`, `medaille_id`) VALUES
(1, 1, 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `sport`
--

CREATE TABLE `sport` (
  `id_sport` int(3) NOT NULL,
  `Nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `sport`
--

INSERT INTO `sport` (`id_sport`, `Nom`) VALUES
(1, 'Athletisme');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `athlete`
--
ALTER TABLE `athlete`
  ADD PRIMARY KEY (`id_athlete`);

--
-- Index pour la table `epreuve`
--
ALTER TABLE `epreuve`
  ADD PRIMARY KEY (`id_epreuve`),
  ADD KEY `FK1` (`sport_id`),
  ADD KEY `FK2` (`athlete_id`);

--
-- Index pour la table `medaille`
--
ALTER TABLE `medaille`
  ADD PRIMARY KEY (`id_medaille`);

--
-- Index pour la table `participation`
--
ALTER TABLE `participation`
  ADD PRIMARY KEY (`id_participation`),
  ADD KEY `FK4` (`athlete_id`),
  ADD KEY `FK6` (`medaille_id`),
  ADD KEY `FK8` (`epreuve_id`);

--
-- Index pour la table `sport`
--
ALTER TABLE `sport`
  ADD PRIMARY KEY (`id_sport`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `epreuve`
--
ALTER TABLE `epreuve`
  ADD CONSTRAINT `FK1` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`id_sport`),
  ADD CONSTRAINT `FK2` FOREIGN KEY (`athlete_id`) REFERENCES `athlete` (`id_athlete`);

--
-- Contraintes pour la table `participation`
--
ALTER TABLE `participation`
  ADD CONSTRAINT `FK3` FOREIGN KEY (`athlete_id`) REFERENCES `athlete` (`id_athlete`),
  ADD CONSTRAINT `FK4` FOREIGN KEY (`athlete_id`) REFERENCES `athlete` (`id_athlete`),
  ADD CONSTRAINT `FK6` FOREIGN KEY (`medaille_id`) REFERENCES `medaille` (`id_medaille`),
  ADD CONSTRAINT `FK8` FOREIGN KEY (`epreuve_id`) REFERENCES `epreuve` (`id_epreuve`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
