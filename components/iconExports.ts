import BigQuery from '@/public/technologies-icons/BD/BigQuery.svg'
import HBase from '@/public/technologies-icons/BD/hbase.svg'
import Hype from '@/public/technologies-icons/BD/hype.png'
import OracleSQL from '@/public/technologies-icons/BD/OracleSQL.svg'
import PostgreSQL from '@/public/technologies-icons/BD/postgresql.svg'
import Redshift from '@/public/technologies-icons/BD/redshift.svg'
import SAP from '@/public/technologies-icons/BD/sap.svg'
import Teradata from '@/public/technologies-icons/BD/teradata.svg'

import MicroStrategy from '@/public/technologies-icons/BI/MicroStrategy.svg'
import PowerBI from '@/public/technologies-icons/BI/PowerBI.png'
import Tableau from '@/public/technologies-icons/BI/Tableau.svg'
import QuickSight from '@/public/technologies-icons/BI/QuickSight.svg'

import BMC from '@/public/technologies-icons/ETL/bmc.svg'
import IBM from '@/public/technologies-icons/ETL/ibm.svg'
import Kawa from '@/public/technologies-icons/ETL/kawa.jpeg'
import Nifi from '@/public/technologies-icons/ETL/nifi.svg'
import Talend from '@/public/technologies-icons/ETL/talend.svg'
import Pentaho from '@/public/technologies-icons/ETL/pentaho.png'

import ChromaDB from '@/public/technologies-icons/IA/ChromaDB.png'
import LlamaIndex from '@/public/technologies-icons/IA/LlamaIndex.svg'
import OpenAI from '@/public/technologies-icons/IA/OpenAI.svg'

import Databricks from '@/public/technologies-icons/ML/Databricks.svg'

import CSS from '@/public/technologies-icons/Software/CSS3.svg'
import HTML from '@/public/technologies-icons/Software/HTML5.svg'
import JS from '@/public/technologies-icons/Software/JavaScript.svg'
import Python from '@/public/technologies-icons/Software/Python.svg'
import React from '@/public/technologies-icons/Software/React.svg'
import TypeScript from '@/public/technologies-icons/Software/TypeScript.svg'
import Scala from '@/public/technologies-icons/Software/Scala.svg'
import AWS from '@/public/technologies-icons/Software/AWS.svg'

export const TechnologiesContent: AccordeonProps[] = [
  {
    id: 'tech-bi',
    question: 'Business Intelligence',

    contentList: [
      {
        image: PowerBI,
        title: 'PowerBI'
      },
      {
        image: QuickSight,
        title: 'AWS QuickSight'
      },
      {
        image: MicroStrategy,
        title: 'MicroStrategy'
      },
      {
        image: Tableau,
        title: 'Tableau'
      }
    ]
  },
  {
    id: 'tech-ia',
    question: 'Inteligencia Artificial',

    contentList: [
      {
        image: OpenAI,
        title: 'OpenAI'
      },
      {
        image: LlamaIndex,
        title: 'LlamaIndex'
      },
      {
        image: ChromaDB,
        title: 'ChromaDB'
      }
    ]
  },
  {
    id: 'tech-ml',
    question: 'Machine Learning',

    contentList: [
      {
        image: Databricks,
        title: 'Azure Databricks'
      }
    ]
  },
  {
    id: 'tech-db',
    question: 'Bases de datos',

    contentList: [
      {
        image: PostgreSQL,
        title: 'PostgreSQL'
      },
      {
        image: HBase,
        title: 'Apache HBase'
      },
      {
        image: OracleSQL,
        title: 'OracleSQL'
      },
      {
        image: Hype,
        title: 'Hype'
      },
      {
        image: Redshift,
        title: 'AWS Redshift'
      },
      {
        image: Teradata,
        title: 'Teradata'
      },
      {
        image: BigQuery,
        title: 'Google BigQuery'
      },
      {
        image: SAP,
        title: 'SAP Hana'
      }
    ]
  },
  {
    id: 'tech-softdev',
    question: 'Desarrollo de Software',

    contentList: [
      {
        image: React,
        title: 'React'
      },
      {
        image: TypeScript,
        title: 'TypeScript'
      },
      {
        image: JS,
        title: 'JavaScript'
      },
      {
        image: HTML,
        title: 'HTML'
      },
      {
        image: CSS,
        title: 'CSS'
      },
      {
        image: Python,
        title: 'Python'
      },
      {
        image: Scala,
        title: 'Scala'
      },
      {
        image: AWS,
        title: 'AWS'
      }
    ]
  },
  {
    id: 'tech-etl',
    question: 'ETL',

    contentList: [
      {
        image: Talend,
        title: 'Talend'
      },
      {
        image: BMC,
        title: 'ControlM'
      },
      {
        image: Nifi,
        title: 'Apache Nifi'
      },
      {
        image: Kawa,
        title: 'Kawa'
      },
      {
        image: Pentaho,
        title: 'Pentaho'
      },
      {
        image: IBM,
        title: 'IBM'
      }
    ]
  }
]
