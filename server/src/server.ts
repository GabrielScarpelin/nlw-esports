import  express  from 'express';
import { PrismaClient } from '@prisma/client';
import { convertHoursStringToMinutes } from './utils/converter-hora-para-minutos';
import cors from 'cors';
const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors())
app.get('/games', async (req, res)=>{
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select:{
                    ads: true
                }
            }
        }
    })
    return res.json(games)
})
app.post('/games/:id/ads', async (req, res, next)=>{
    console.log('post')
    const gameId = req.params.id
    const body:any = req.body
    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays.join(','),
            hourStart: convertHoursStringToMinutes(body.hourStart),
            hourEnd: convertHoursStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    })
    return res.status(201).json(ad)
})
app.get('/games/:id/ads', async (req, res, next)=>{
    const gameId = req.params.id
    const ad = await prisma.ad.findMany({
        where: {
            gameId,
        },
        select: {
            name: true,
            yearsPlaying: true,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true
        }
    })
    return res.json(ad)
})
app.get('/ads/:id/discord', async (req, res, next)=>{
    const idAnuncio = req.params.id
    const ad = await prisma.ad.findUniqueOrThrow({
        where: {
            id : idAnuncio
        },
        select: {
            discord: true
        }
    })
    return res.json(ad.discord)
})
app.listen(3333)