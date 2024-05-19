import { Button } from '~/css/@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/css/@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/css/@/components/ui/form';
import { Input } from '~/css/@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, router, usePage } from '@inertiajs/react';

const formSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  password: z.string().min(8, { message: 'Mot de passe trop court' }),
});

const Login = () => {
  // isAdmin used to redirect to the correct page after login and change info on the page
  const { isAdmin } = usePage<{ isAdmin: boolean }>().props;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    submitForm(data);
  };

  const submitForm = async (data: z.infer<typeof formSchema>, token?: string) => {
    const payload = {
      email: data.email,
      password: data.password,
      captcha: token,
    };
    router.post(`/admin`, payload);
  };

  return (
    <div className="flex justify-center items-center h-screen">
  <Card className="max-w-96 w-full">
    <CardHeader>
      <CardTitle>Administration Connexion</CardTitle>
    </CardHeader>
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="exemple@exemple.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4 w-full">
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            className="hover:underline underline-offset-4 mt-2"
            href="/auth/email/requestResetPassword"
          >
            Mot de passe oublié?
          </Link>
          <Button className="w-full mt-4" type="submit">
            Se connecter
          </Button>
        </form>
      </Form>
      <hr className="my-4" />
      <Link className="hover:underline underline-offset-4" href="/">
        Retour à l'accueil
      </Link>
    </CardContent>
  </Card>
</div>

  );
};

export default Login;
