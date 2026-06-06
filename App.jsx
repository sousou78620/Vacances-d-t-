import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function TravelPlanner() {
  const [steps, setSteps] = useState([]);
  const [form, setForm] = useState({
    date: "",
    location: "",
    hotel: "",
    notes: "",
  });

  const addStep = () => {
    if (!form.location) return;
    setSteps([...steps, form]);
    setForm({ date: "", location: "", hotel: "", notes: "" });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Mon itinéraire de vacances ☀️
      </h1>

      <Card className="mb-4 rounded-2xl shadow">
        <CardContent className="space-y-2 p-4">
          <Input
            placeholder="Date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <Input
            placeholder="Lieu / étape"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <Input
            placeholder="Nom de l'hôtel"
            value={form.hotel}
            onChange={(e) => setForm({ ...form, hotel: e.target.value })}
          />
          <Textarea
            placeholder="Notes (activités, restos, etc.)"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
          <Button onClick={addStep} className="w-full">
            Ajouter l'étape
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="rounded-2xl shadow">
              <CardContent className="p-4">
                <p className="font-semibold">{step.date}</p>
                <p className="text-lg">📍 {step.location}</p>
                <p>🏨 {step.hotel}</p>
                <p className="text-sm text-gray-600">{step.notes}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
