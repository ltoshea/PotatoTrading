/****** Object:  Table [dbo].[Storage]    Script Date: 17/03/2019 13:42:34 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StorageCompany](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL
) ON [PRIMARY]
ALTER TABLE [dbo].[StorageCompany] ADD  CONSTRAINT [PK_StorageId] PRIMARY KEY CLUSTERED ([Id]);
GO


