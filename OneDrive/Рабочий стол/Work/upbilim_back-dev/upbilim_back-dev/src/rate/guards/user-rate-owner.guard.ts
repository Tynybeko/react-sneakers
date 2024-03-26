import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { UserRateService } from '../services/user-rate.service';
import { UserRolesEnum } from '../../user/enums/user-roles.enum';

@Injectable()
export class UserRateOwnerGuard extends JwtAuthGuard {
  constructor(
    @Inject(UserRateService) private readonly userRateService: UserRateService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    const previousResult = await super.canActivate(context);
    if (!previousResult) {
      return false;
    }
    const req = context.switchToHttp().getRequest();
    const userRateId = +req._parsedUrl.pathname.split('/').at(-1);
    const userRate = await this.userRateService.findOne(userRateId);

    return (
      userRate.user.id === req.user.sub || req.user.role === UserRolesEnum.ADMIN
    );
  }
}
