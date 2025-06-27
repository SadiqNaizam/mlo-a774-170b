import React from 'react';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';

const Settings = () => {
  console.log('Settings page loaded');

  // Placeholder function for form submission
  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password save requested.");
    // Add logic for updating password here
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePasswordSave} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button type="submit">Save Password</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>
                    Manage your notification preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="sales-notifications" className="flex flex-col space-y-1">
                      <span>Sales Updates</span>
                      <span className="font-normal leading-snug text-muted-foreground">
                        Receive notifications for new sales and revenue milestones.
                      </span>
                    </Label>
                    <Switch id="sales-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="stock-notifications" className="flex flex-col space-y-1">
                      <span>Low Stock Alerts</span>
                      <span className="font-normal leading-snug text-muted-foreground">
                        Get notified when product inventory is running low.
                      </span>
                    </Label>
                    <Switch id="stock-notifications" defaultChecked />
                  </div>
                   <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="marketing-notifications" className="flex flex-col space-y-1">
                      <span>Marketing & Promotions</span>
                      <span className="font-normal leading-snug text-muted-foreground">
                        Receive updates about new marketing features and tips.
                      </span>
                    </Label>
                    <Switch id="marketing-notifications" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
               <Card>
                <CardHeader>
                  <CardTitle>Team Management</CardTitle>
                  <CardDescription>
                    Invite and manage team members (Admin only).
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">This feature is coming soon. You'll be able to invite colleagues to view and manage your store dashboard.</p>
                  <Button disabled>Invite Member</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Settings;