/****** Object:  Table [dbo].[StoragePrice]    Script Date: 17/03/2019 14:38:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StoragePrice](
	[ProductId] [int] NOT NULL,
	[StorageId] [int] NOT NULL,
	[StorageFee] [float] NOT NULL,
	[ValidFrom] [datetime2](2) GENERATED ALWAYS AS ROW START NOT NULL,
	[ValidTo] [datetime2](2) GENERATED ALWAYS AS ROW END NOT NULL,
 CONSTRAINT [PK_StoragePrice] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC,
	[StorageId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY],
	PERIOD FOR SYSTEM_TIME ([ValidFrom], [ValidTo])
) ON [PRIMARY]
WITH
(
SYSTEM_VERSIONING = ON ( HISTORY_TABLE = [dbo].[StoragePriceHistory] )
)
GO

ALTER TABLE [dbo].[StoragePrice]  WITH CHECK ADD  CONSTRAINT [FK_Key_ProductId] FOREIGN KEY([ProductId])
REFERENCES [dbo].[Product] ([ProductId])
GO

ALTER TABLE [dbo].[StoragePrice] CHECK CONSTRAINT [FK_Key_ProductId]
GO

ALTER TABLE [dbo].[StoragePrice]  WITH CHECK ADD  CONSTRAINT [FK_Key_StorageCompanyId] FOREIGN KEY([StorageId])
REFERENCES [dbo].[StorageCompany] ([Id])
GO

ALTER TABLE [dbo].[StoragePrice] CHECK CONSTRAINT [FK_Key_StorageCompanyId]
GO


