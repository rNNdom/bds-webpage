import BigQuery from '@/public/technologies-icons/BD/BigQuery.svg'
import HBase from '@/public/technologies-icons/BD/hbase.svg'
import ApacheHive from '@/public/technologies-icons/BD/ApacheHive.svg'
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
import CA from '@/public/technologies-icons/ETL/CA.png'
import Nifi from '@/public/technologies-icons/ETL/nifi.svg'
import Talend from '@/public/technologies-icons/ETL/talend.svg'
import Pentaho from '@/public/technologies-icons/ETL/pentaho.png'

import ChromaDB from '@/public/technologies-icons/IA/ChromaDB.png'
import LlamaIndex from '@/public/technologies-icons/IA/LlamaIndex.svg'
import OpenAI from '@/public/technologies-icons/IA/OpenAI.svg'

import Databricks from '@/public/technologies-icons/ML/Databricks.svg'
import AWSML from '@/public/technologies-icons/ML/machine-learning.svg'

import CSS from '@/public/technologies-icons/Software/CSS3.svg'
import HTML from '@/public/technologies-icons/Software/HTML5.svg'
import JS from '@/public/technologies-icons/Software/JavaScript.svg'
import Python from '@/public/technologies-icons/Software/Python.svg'
import React from '@/public/technologies-icons/Software/React.svg'
import TypeScript from '@/public/technologies-icons/Software/TypeScript.svg'
import Scala from '@/public/technologies-icons/Software/Scala.svg'
import AWS from '@/public/technologies-icons/Software/AWS.svg'

import BigData from '@/public/service-logos/BigDataWhite.svg'
import DataService from '@/public/service-logos/DataServiceLogoWhite.svg'
import ML from '@/public/service-logos/MLLogoWhite.svg'
import SoftDev from '@/public/service-logos/SoftDevLogoWhite.svg'
import BDS4 from '@/public/BDS4.png'

import Asesorias from '@/public/service-logos/service-list/asesorias.png'
import Outsourcing from '@/public/service-logos/service-list/outsourcing.png'
import SoftwareFactory from '@/public/service-logos/service-list/software-factory.png'
import Visualizacion from '@/public/service-logos/service-list/visualization.png'
import Integracion from '@/public/service-logos/service-list/integration.png'
import Mantenimiento from '@/public/service-logos/service-list/maintenance.png'
import Capacitacion from '@/public/service-logos/service-list/training.png'
import Migraciones from '@/public/service-logos/service-list/migrations.png'
import PruebasConcepto from '@/public/service-logos/service-list/concept-testing.png'
import ServiciosDWH from '@/public/service-logos/service-list/dwh-services.png'

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
      },
      {
        image: AWSML,
        title: 'AWS Machine Learning'
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
        image: ApacheHive,
        title: 'Apache Hive'
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
        image: CA,
        title: 'CA Workload Automation'
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

export const ServicesContent: AccordeonProps[] = [
  {
    id: 'data-services',
    question: 'Servicios de datos',
    description: 'Brindamos el mejor servicio y experiencia con nuestro servicio de datos hacia nuestros clientes. Confía en nuestra experiencia.',
    image: DataService,
    contentList: [
      {
        image: Asesorias,
        title: 'Asesorías',
        description: 'Asesorías integrales para encontrar la solución óptima antes las oportunidades de mejora presentes en tu empresa.'
      },
      {
        image: SoftwareFactory,
        title: 'Software factory',
        description: 'Ofrecemos equipos transversales, capaces de realizar el levantamiento, desarrollo y QA, mediante un control continuo y ágil de los proyectos.'
      },
      {
        image: Visualizacion,
        title: 'Visualización',
        description: 'Reportes, paneles, tableros personalizados a las necesidades del negocio, utilizando herramientas BI.'
      },
      {
        image: Integracion,
        title: 'Integración',
        description: 'A través de herramientas ETL extraemos los datos desde los distintos orígenes para transformarlos y cargarlos según la petición del cliente.'
      },
      {
        image: Outsourcing,
        title: 'Outsourcing',
        description: 'Deslíguese de la tarea de construir modelos de datos, procesos ETL y reportes, déjenos ayudarlos.'
      },
      {
        image: Mantenimiento,
        title: 'Mantenimiento',
        description: 'Correctivo, perfectivo y evolutivo sobre modelos de datos, procesos ETL, Reportes y arquitecturas BI/Big Data.'
      },
      {
        image: Capacitacion,
        title: 'Capacitación',
        description: 'Ofrecemos capacitaciones a medida en las herramientas BI, ETL, Reportera, Big Data, Modelos de datos, etc.'
      },
      {
        image: ServiciosDWH,
        title: 'Proyectos y servicios DWH',
        description: 'Diseñamos, construimos e implementamos Data Warehouses desde cero.'
      }
    ]
  },
  {
    id: 'bigdata-services',
    question: 'Servicios de Big Data',
    description: 'Diseñamos e implementamos soluciones Big Data a la medida. Somos expertos en arquitecturas de Big Data.',
    image: BigData,
    contentList: [
      {
        image: PruebasConcepto,
        title: 'Pruebas de Conceptos',
        description: 'Realizamos pruebas de concepto en diferentes herramientas tanto BI como Big Data.'
      },
      {
        image: Migraciones,
        title: 'Migraciones',
        description:
          'A medida que las plataformas tecnológicas avanzan, ofrecemos servicios especializados en migración y actualización para mantener su infraestructura al día con las últimas innovaciones.'
      }
    ]
  },
  {
    id: 'software-services',
    question: 'Desarrollo de Software',
    description: 'Diseñamos e implementamos soluciones de software a la medida de nuestros clientes. Nos basamos en tecnología en la nube.',
    image: SoftDev,
    contentList: [
      {
        image: BDS4,
        title: 'Desarrollo móvil',
        description: 'Desarrollamos aplicaciones móviles nativas e híbridas para Android e iOS, utilizando tecnologías como Expo y React Native.'
      },
      {
        image: BDS4,
        title: 'Desarrollo de software',
        description:
          'Desarrollamos software a medida para plataformas web, adaptándonos a las necesidades específicas de nuestros clientes. Utilizamos tecnologías que operan en entornos con Node.js, como React, TypeScript, Next.js, JavaScript, HTML y CSS.'
      },
      {
        image: BDS4,
        title: 'Infraestructura en la Nube',
        description:
          'Diseñamos e implementamos soluciones robustas utilizando servicios en la nube, como AWS, para garantizar la escalabilidad, disponibilidad y seguridad de las aplicaciones. Nos enfocamos en crear infraestructuras eficientes que soporten el crecimiento y adaptabilidad de los proyectos, optimizando recursos y costos operativos.'
      }
    ]
  },
  {
    id: 'ia-data',
    question: 'Inteligencia artificial y automatización de procesos',
    description:
      'Diseñamos soluciones empresariales basadas en los tópicos tecnológicos más recientes, usando inteligencia artificial (AI), aprendizaje automático (ML) y automatización robótica de procesos (RPA).',
    image: ML,
    contentList: [
      {
        image: BDS4,
        title: 'Inteligencia artificial generativa',
        description:
          'Creamos soluciones con inteligencia artificial generativa que producen contenido original, adaptado a las necesidades específicas de tu negocio. Aprovechamos técnicas avanzadas de almacenamiento y búsqueda de datos para gestionar grandes volúmenes de información de manera eficiente.'
      },
      {
        image: BDS4,
        title: 'Machine Learning',
        description:
          'Desarrollamos soluciones de Machine Learning que mejoran la precisión en la toma de decisiones y optimizan procesos a través del análisis predictivo. Utilizamos métodos avanzados para gestionar y analizar datos de manera rápida y efectiva.'
      },
      {
        image: BDS4,
        title: 'RPA',
        description:
          'Automatizamos tareas repetitivas y manuales, a traves de procesos RPA (Robotic Process Automation) personalizados, permitiendo a los equipos de trabajo optimizar sus tiempos de respuesta en sus procesos internos, mejorando así eficiencia y la productividad de tu empresa.'
      }
    ]
  }
]
