type Props = { label: string; value: string };

export default function EducationStat({ label, value }: Props) {
  return (
    <div>
      <dt className="font-mono text-xs text-subtle uppercase">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-heading">{value}</dd>
    </div>
  );
}
