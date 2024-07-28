const jwt = require("jsonwebtoken");
const { JWT_EXPIRES_IN, JWT_SECRET, SECRETDECRIPT } = require("../config");
const bcrypt = require("bcrypt");
const crypto = require('crypto');

class UTILS {
  generateKey(secret) {
    return crypto.createHash('sha256').update(secret).digest('hex');
  }

  createJWTToken(user) {
    return jwt.sign({ user }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
  };

  async encryptPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  };

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  };

  // Función para encriptar
  async encrypt(text, secretKey = SECRETDECRIPT) {
    const iv = crypto.randomBytes(16); // Generar un IV aleatorio
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return iv.toString('base64') + ':' + encrypted;
  }

  // Función para desencriptar
  async decrypt(encryptedText, secretKey = SECRETDECRIPT) {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts[0], 'base64');
    const encrypted = textParts[1];
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey), iv);
    let decrypted = decipher.update(encrypted, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  getresponse(status, message, data, code) {
    return { status, message, data, statusCode: code }
  }

  async getCurrentUser() {
    try {
      const currentuser = global.currentuser
      return await this.decrypt(currentuser.clave)
    } catch (error) {
      throw error
    }
  }

  async validarpermisos() {
    let userclave = await this.getCurrentUser()
    let prodcomp = userclave !== process.env.ADMIN_USER
    let localcomp = userclave !== process.env.LOCAL_ADMIN_USER
    let isdev = process.env.STATE == "DEV"
    if (isdev ? localcomp : prodcomp) {
      return {
        status: false,
        statusCode: 400,
        message: "no se puede continuar no se cuenta con los permisos",
        data: null
      }
    }
    return {
      status: true,
      statusCode: 200,
      message: null,
      data: null
    }
  }
}

module.exports = new UTILS();
