declare module "github-calendar" {
  type CalendarOptions = { summary_text?: string; proxy?: Function; global_status?: boolean; responsive?: boolean };
  function GitHubCalendar(container: string | HTMLElement, username: string, options?: CalendarOptions): Promise<void>;

  export default GitHubCalendar;
}
