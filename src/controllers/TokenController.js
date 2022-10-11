import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Credenciais não existe.'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      });
    }

    const passwordIsValid = await bcryptjs.compare(password, user.password_hash);

    if (!passwordIsValid) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
