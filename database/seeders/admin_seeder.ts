import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

const adminPWD = process.env.ADMIN_PWD

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.create({email: 'bemoul@proton.me', password: adminPWD})
  }
}