import Joi from 'joi';

export const loginSchema = Joi.object({
    usuario: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.empty': 'Usuário deve ser preenchido!',
            'string.min': 'Usuário deve ter pelo menos 3 caracteres.',
            'any.required': 'Usuário é obrigatório.',
        }),
    senha: Joi.string()
        .min(8)
        .required()
        .messages({
            'string.empty': 'A senha deve ser preenchida!',
            'string.pattern.base': 'A senha deve ter pelo menos 8 caracteres com letra maiúscula, minúscula e caractere especial.',
            'string.min': 'Senha deve ter pelo menos 8 caracteres.',
            'any.required': 'Senha é obrigatória.'
        }),
});