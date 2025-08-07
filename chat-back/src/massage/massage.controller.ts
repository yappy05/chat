import { Controller } from '@nestjs/common';
import { MassageService } from './massage.service';

@Controller('massage')
export class MassageController {
  constructor(private readonly massageService: MassageService) {}
}
