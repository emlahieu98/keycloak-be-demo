import { Controller, Get } from '@nestjs/common';
import {
  AuthenticatedUser,
  Public,
  Roles,
  RoleMatchingMode,
  Resource,
} from 'nest-keycloak-connect';

@Controller()
// @Resource('fitness-app')
export class AppController {
  @Get()
  @Public(false)
  getHello(
    @AuthenticatedUser()
    user: any,
  ): string {
    if (user) {
      return `Hello ${user.preferred_username}`;
    } else {
      return 'Hello world!';
    }
  }

  @Get('private')
  getPrivate() {
    return 'Authenticated only!';
  }

  @Get('admin')
  // @Roles({ roles: ['user-trainee'], mode: RoleMatchingMode.ALL })
  @Roles({ roles: ['user-trainee'] })
  adminRole() {
    return 'Admin only!';
  }
}
