-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Jun 27, 2019 at 01:14 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sampledb`
--

-- --------------------------------------------------------

--
-- Table structure for table `sample`
--

CREATE TABLE `equipe` (
  `id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `match` (
  `id` int(255) NOT NULL,
  `cote` FLOAT NOT NULL,
  `equipe` int(255) NOT NULL,
  `ligue` int(255) NOT NULL,
  `date` DATE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `ligue` (
  `id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link` varchar(450) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `assoc_ligue_equipe` (
  `ligueid` int(255) NOT NULL,
  `equipeid` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



--
-- Dumping data for table `sample`
--

INSERT INTO `equipe` (`id`, `name`) VALUES
(1, 'Bordeaux'),
(2, 'Liverpool'),
(3, 'Manchester City'),
(4, 'Real Madrid');

INSERT INTO `ligue` (`id`, `name`, `link`) VALUES
(1, 'Ligue 1', 'https://www.betclic.fr/football-s1/ligue-1-uber-eats-c4'),
(2, 'Premier League', 'https://www.betclic.fr/football-s1/angl-premier-league-c3'),
(3, 'Liga 1', 'https://www.betclic.fr/football-s1/espagne-liga-primera-c7');

INSERT INTO `match` (`id`, `cote`, `equipe`, `ligue`, `date`) VALUES
(1, 2.33, 1, 1, '2022-11-28'),
(2, 1.25, 2, 2, '2022-11-29'),
(3, 4.40, 3, 2, '2022-11-30');

INSERT INTO `assoc_ligue_equipe` (`ligueid`, `equipeid`) VALUES
(1, 1),
(2, 2),
(2, 3),
(3, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sample`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `match`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `ligue`
  ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sample`
--
ALTER TABLE `equipe`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

ALTER TABLE `match`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

ALTER TABLE `ligue`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
  
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;