-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2016 at 12:17 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `awmifinal`
--

-- --------------------------------------------------------

--
-- Table structure for table `cover_sheets`
--

CREATE TABLE `cover_sheets` (
  `id` int(10) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `toName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `toPhone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `toFax` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `toEmail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `re` int(11) NOT NULL,
  `ourRef` int(11) NOT NULL,
  `motherVessel` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `arrived` date NOT NULL,
  `billOfLoading` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `containerNos` int(11) NOT NULL,
  `surveyLocation` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dateOfSurvey` date NOT NULL,
  `surveyReason` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `userId` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cover_sheets`
--

INSERT INTO `cover_sheets` (`id`, `date`, `time`, `toName`, `toPhone`, `toFax`, `toEmail`, `re`, `ourRef`, `motherVessel`, `arrived`, `billOfLoading`, `containerNos`, `surveyLocation`, `dateOfSurvey`, `surveyReason`, `userId`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, '2016-09-02', '22:02:38', '', '87568686868886', '44545', 'johir@gfdnfif', 45454, 45454, '45454', '2016-09-09', '454545', 45454, '4545454545', '2016-09-08', '45454545454', '1', NULL, '2016-09-02 22:16:29', '2016-09-02 22:16:29'),
(2, '2016-09-02', '22:54:35', 'jjtyjyj', '0535325252525', '2142424', 'jahdishdshud@nn', 0, 1424524, '545454', '2016-09-13', '544445', 2353, '35353', '2016-09-09', '535335', '1', NULL, '2016-09-02 22:56:48', '2016-09-02 22:56:48'),
(3, '2016-09-03', '00:54:50', 'mohim ahmed', '01553652775', '125521', 'mohim@gmail.com', 258, 452, 'dhakat', '2016-09-28', '12966', 20, '159951', '2016-09-10', 'valo', '1', NULL, '2016-09-03 00:58:59', '2016-09-03 00:58:59'),
(4, '2016-09-03', '00:54:50', 'mohim ahmed', '01553652775', '125521', 'mohim@gmail.com', 258, 452, 'dhakat', '2016-09-28', '12966', 20, '159951', '2016-09-10', 'valo', '1', NULL, '2016-09-03 01:03:47', '2016-09-03 01:03:47'),
(5, '2016-09-03', '00:54:50', 'mohim ahmed', '01553652775', '125521', 'mohim@gmail.com', 258, 452, 'dhakat', '2016-09-28', '12966', 20, '159951', '2016-09-10', 'valo', '1', NULL, '2016-09-03 01:03:49', '2016-09-03 01:03:49'),
(6, '2016-09-03', '00:54:50', 'mohim ahmed', '01553652775', '125521', 'mohim@gmail.com', 258, 452, 'dhakat', '2016-09-28', '12966', 20, '159951', '2016-09-10', 'valo', '1', NULL, '2016-09-03 01:06:12', '2016-09-03 01:06:12'),
(7, '2016-09-03', '01:06:20', 'hghfhdfghdfhdfhdfhd', '53535353535353535', '535353353', 'gggh@grgfgfgfg', 524224, 2441, '422', '2016-09-08', 'lili', 5325, 'k,jlklil', '2016-08-30', 'gjjfyjyjy', '1', NULL, '2016-09-03 01:07:01', '2016-09-03 01:07:01'),
(8, '2016-09-03', '01:06:20', 'hghfhdfghdfhdfhdfhd', '53535353535353535', '535353353', 'gggh@grgfgfgfg', 524224, 2441, '422', '2016-09-08', 'lili', 5325, 'k,jlklil', '2016-08-30', 'gjjfyjyjy', '1', NULL, '2016-09-03 01:07:10', '2016-09-03 01:07:10'),
(9, '2016-09-03', '01:06:20', 'hghfhdfghdfhdfhdfhd', '53535353535353535', '535353353', 'gggh@grgfgfgfg', 524224, 2441, '422', '2016-09-08', 'lili', 5325, 'k,jlklil', '2016-08-30', 'gjjfyjyjy', '1', NULL, '2016-09-03 01:07:11', '2016-09-03 01:07:11'),
(10, '2016-09-03', '01:06:20', 'hghfhdfghdfhdfhdfhd', '53535353535353535', '535353353', 'gggh@grgfgfgfg', 524224, 2441, '422', '2016-09-08', 'lili', 5325, 'k,jlklil', '2016-08-30', 'gjjfyjyjy', '1', NULL, '2016-09-03 01:07:15', '2016-09-03 01:07:15'),
(11, '2016-09-03', '01:06:20', 'hghfhdfghdfhdfhdfhd', '53535353535353535', '535353353', 'gggh@grgfgfgfg', 524224, 2441, '422', '2016-09-08', 'lili', 5325, 'k,jlklil', '2016-08-30', 'gjjfyjyjy', '1', NULL, '2016-09-03 01:07:16', '2016-09-03 01:07:16'),
(12, '2016-09-03', '01:06:20', 'hghfhdfghdfhdfhdfhd', '53535353535353535', '535353353', 'gggh@grgfgfgfg', 524224, 2441, '422', '2016-09-08', 'lili', 5325, 'k,jlklil', '2016-08-30', 'gjjfyjyjy', '1', NULL, '2016-09-03 01:07:19', '2016-09-03 01:07:19'),
(13, '2016-09-03', '01:06:20', 'hghfhdfghdfhdfhdfhd', '53535353535353535', '535353353', 'gggh@grgfgfgfg', 524224, 2441, '422', '2016-09-08', 'lili', 5325, 'k,jlklil', '2016-08-30', 'gjjfyjyjy', '1', NULL, '2016-09-03 01:07:20', '2016-09-03 01:07:20');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2016_09_03_030442_create_coversheets_table', 1),
('2016_09_03_040558_create_coversheets_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `role` int(11) NOT NULL DEFAULT '3',
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'jahir', 'jahir@gmail.com', '$2y$10$Zm/wmIiJlNNOhu7QdNIUqOjIMhZLv/KR4CmeBjUmMXflkB.IcD.B6', 1, NULL, '2016-09-02 22:02:00', '2016-09-02 22:02:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cover_sheets`
--
ALTER TABLE `cover_sheets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cover_sheets`
--
ALTER TABLE `cover_sheets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
