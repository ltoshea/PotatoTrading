/****** Object:  Table [dbo].[Product]    Script Date: 17/03/2019 13:33:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Product](
	[ProductId] INT NOT NULL,
	[VarietyName] [varchar](50) NOT NULL,
	[Country] [varchar](50) NULL,
	[ShapeOfTuber] [varchar](50) NULL,
	[ColourOfSkin] [varchar](50) NULL,
	[ColourOfFlesh] [varchar](50) NULL,
	[DepthOfEyes] [varchar](50) NULL,
	[SmoothnessOfSkin] [varchar](50) NULL,
	[ColourOfBaseOfLightsprout] [varchar](50) NULL,
	[Maturity] [varchar](50) NULL,
	[HeightOfPlants] [varchar](50) NULL,
	[FrequencyOfBerries] [varchar](50) NULL
) ON [PRIMARY];
ALTER TABLE [dbo].[Product] ADD  CONSTRAINT [PK_ProductId] PRIMARY KEY CLUSTERED ([ProductId]);

--ALTER TABLE dbo.product 
--ALTER column ProductId INT NOT NULL
GO


