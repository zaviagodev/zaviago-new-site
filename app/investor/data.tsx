export interface InvestorDataProps {
    title: string
    desc: string
}
  
export interface DataCompProps {
    data: InvestorDataProps[]
    className?: string
}

export interface InvestmentThesisProps {
    id: number
    title: string
    desc: string
    accordionTitle: string
    accordionDesc: string
}
  
export const investor_data: InvestorDataProps[] = [
    {
      title:"11x",
      desc:"Product in EcoSystem"
    },
    {
      title:"฿20 million",
      desc:"Invested"
    },
    {
      title:"฿70 million",
      desc:"In valuation"
    },
    {
      title:"3x",
      desc:"Leading investors"
    },
    {
      title:"5x",
      desc:"Planned products"
    },
    {
      title:"9x",
      desc:"Team members"
    }
]
  
export const transaction_data: InvestorDataProps[] = [
    {
      title:"฿1.7 million",
      desc:"In transactions"
    },
    {
      title:"฿120 million",
      desc:"AVG. transactions / months"
    },
    {
      title:"4,000+",
      desc:"Unique Active Users"
    },
    {
      title:"2 million",
      desc:"In data rows"
    }
]

export const investment_thesis_data: InvestmentThesisProps[] = [
    {
        id:1, 
        title:"Investment thesis", 
        desc:"We help accelerate the power of entrepreneurship and merchant success", 
        accordionTitle:"Discovery", 
        accordionDesc:"An audit to understand your brand, your competition, and how to cut through the noise of a crowded industry."
    },
    {
        id:2, 
        title:"Systems", 
        desc:"We aim to be leading platform for entrepreneurship and increasingly all of commerce", 
        accordionTitle:"Guidelines", 
        accordionDesc:"Best practices that empower teams, partners, and vendors to put the new identity into the practice."
    },
    {
        id:3, 
        title:"Applications", 
        desc:"As merchants do better, Zaviago does better", 
        accordionTitle:"Campaigns", 
        accordionDesc:"Content for digital, social, and beyond."
    }
]