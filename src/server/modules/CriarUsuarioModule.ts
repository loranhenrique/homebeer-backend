import { MongoUsuarioRepository } from '@client';
import { CriarUsuarioUseCase } from '@core';
import { CriarUsuarioController } from '@entrypoint';
import { MailtrapProvider } from '@providers';

export const criarUsuarioModule = (): CriarUsuarioController => {
  const mongoUsuarioRepository = new MongoUsuarioRepository();
  const mailtrapProvider = new MailtrapProvider();

  const criarUsuarioUseCase = new CriarUsuarioUseCase(mongoUsuarioRepository, mailtrapProvider);

  return new CriarUsuarioController(criarUsuarioUseCase);
};
