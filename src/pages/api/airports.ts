// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { airportDB } from '../../db/airport-db';

type Data = {
  data: any
}

export default async function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
  
  const [rows, fields] = await airportDB.query(`SELECT * FROM airports_1 WHERE iso_country = 'CO' AND type = "large_airport" OR iso_country = 'CO' AND type = 'medium_airport'`);

  res.status(200).json({data: {
    rows,
  }})
}
