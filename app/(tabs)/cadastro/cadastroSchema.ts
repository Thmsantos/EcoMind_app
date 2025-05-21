import Joi from 'joi';

export const cadastroSchema = Joi.object({
    nome: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.empty': 'Nome deve ser preenchido!',
            'string.min': 'Nome deve ter pelo menos 3 caracteres.',
            'any.required': 'Nome é obrigatório.',
        }),
    usuario: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.empty': 'Usuário deve ser preenchido!',
            'string.min': 'Usuário deve ter pelo menos 3 caracteres.',
            'any.required': 'Usuário é obrigatório.',
        }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': 'Email deve ser preenchido!',
            'string.email': 'Email deve ser válido.',
            'any.required': 'Email é obrigatório.',
        }),
    senha: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$'))
        .required()
        .messages({
            'string.empty': 'A senha deve ser preenchida!',
            'string.pattern.base': 'A senha deve ter pelo menos 8 caracteres com letra maiúscula, minúscula e caractere especial.',
            'any.required': 'Senha é obrigatória.',
        }),
    status: Joi.boolean().required(),
    calculos: Joi.array().required()
});