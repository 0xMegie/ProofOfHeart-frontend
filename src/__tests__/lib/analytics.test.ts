import { trackWebVital } from "@/lib/analytics";

describe("web vitals analytics", () => {
  it("dispatches Web Vitals metrics when plausible provider is available", () => {
    const plausible = jest.fn();
    window.plausible = plausible;

    trackWebVital({
      name: "INP",
      value: 150,
      rating: "good",
      id: "v-inp-1",
    });

    expect(plausible).toHaveBeenCalledWith("web_vitals", {
      props: expect.objectContaining({
        metric: "INP",
        value: 150,
        rating: "good",
        metricId: "v-inp-1",
      }),
    });
  });
});
