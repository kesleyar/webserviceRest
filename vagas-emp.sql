-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 14-Jun-2019 às 22:11
-- Versão do servidor: 5.7.24
-- versão do PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vagas-emp`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `vaga`
--

DROP TABLE IF EXISTS `vaga`;
CREATE TABLE IF NOT EXISTS `vaga` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa` varchar(100) NOT NULL,
  `descricao` varchar(250) NOT NULL,
  `cidade` varchar(180) NOT NULL,
  `periodo` enum('0','1') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `vaga`
--

INSERT INTO `vaga` (`id`, `empresa`, `descricao`, `cidade`, `periodo`) VALUES
(1, 'SoftRio', 'vaga para programadores ruby', 'Rio Verde', '1'),
(2, 'JundiSoft', 'vaga para desenvolvedores java', 'Jundiai', '1'),
(3, 'Softwario', 'redes de computadores e internet, excel', 'Rio de Janeiro', '0'),
(4, 'Sofitcher', 'vagas para area de testes e qualidade de software', 'São Paulo', '0'),
(5, 'BugWare', 'Teste de software', 'Jundiai', '0'),
(6, 'ArcorBuzz', 'programadores java, pyton e php, que saiba trbalhar em equipe e com projetos', 'Londres', '0'),
(7, 'Spotify  inc.', 'engenheiro de software especializado em comandar equipes', 'Estocolmo', '0'),
(8, 'Google LLC', 'Especialidade em desenvolvimento web e arquiteturas RPC', 'Mountain View', '1'),
(9, 'Sicoob CrediRural', 'Especialista em segurança web e python', 'Rio Verde', '1'),
(10, 'Bri-digit', 'desenvolvedor python e C#', 'São Paulo', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
