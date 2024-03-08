-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 08 mars 2024 à 15:59
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.2.4

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

--
-- Structure de la table `sport`
--

CREATE TABLE `sport` (
  `id_sport` tinyint(3) UNSIGNED NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sport`
--

INSERT INTO `sport` (`id_sport`, `Nom`, `Image`, `latitude`, `longitude`) VALUES
(1, 'Athletisme', '', 48.9246, 2.3603),
(2, 'Football', 'https://resize-europe1.lanmedia.fr/r/620,310,FFFFFF,center-middle/img/var/europe1/storage/images/europe1/dossiers/football/9879360-8-fre-FR/Football.jpg', 48.9246, 2.3603),
(3, 'Cyclisme sur piste', 'https://images.lindependant.fr/api/v1/images/view/61090496d286c25f211c42b6/large/image.jpg?v=1', 48.7798, 2.0247),
(4, 'Cyclisme sur route', 'https://guides.wiggle.fr/sites/default/files/styles/770x480crop/public/hero/hero_31.jpg?itok=IRjUeCl9', 48.8049, 2.1204),
(5, 'Aviron', 'https://fourchette-et-bikini.fr/sites/default/files/styles/1200x675/public/migration-images/91d0ac31e71b620fd37f28cc38d4ba8c.jpg', 48.8738, 2.3172),
(6, 'Football', 'football.jpg', 48.9516, 2.3728),
(7, 'Taekwondo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkdwmxvb3pZ1lF04SwVjdAVeyrW98kEyXdA&usqp=CAU', 48.9519, 2.428),
(8, 'Marathon', '2wCEAAoGCBUVExcVFRUXFxcYGBwcGhoZGiUZIBsaHBwfGiMhGhodHyskHyMoHyEfJTUkKCwuMjIyISE3PDcxOysxMi4BCwsLDw4PHBERHTEoISgxMTMxMTExMzExMTExMzEyMTExMTE7MzExMzkzMTExMTExMTE5MTExMTExMzExMTExMf', 48.8698, 2.307),
(9, 'Hockey sur gazon', 'https://www.hauts-de-seine.fr/fileadmin/_processed_/5/7/csm_TropheeGazon_058176b280.jpg', 48.8125, 2.1841);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `sport`
--
ALTER TABLE `sport`
  ADD PRIMARY KEY (`id_sport`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `sport`
--
ALTER TABLE `sport`
  MODIFY `id_sport` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
